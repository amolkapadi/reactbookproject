const Book =require("../model/Book");


//getBooks -test postman
const getAllBooks =async (req,res,next)=>{
    let books;
    try{
        books= await Book.find();
    }catch(err){
        console.log(err);
    }
    if(!books){
        return res.status(404).json({message:"No Book found"})
    }
    return res.status(200).json(books)
}

//get book id-test postman
const getById =async(req,res,next)=>{
    const vid =req.params.id;  
    let book;
    try{
        book =await Book.findById(vid);
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"No Book found"})
    }
    return res.status(200).json(book)
}


//add Book-test postman
const addBook =async (req,res,next)=>{
    const {name,author,description,price,available,img}=req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            img
        });
        await book.save();
    }catch (err){
        console.log(err);
    }
    if(!book){
        return res.status(500).json({message:"Unnable to Add"})
    }
    return res.status(201).json({book})
}


//update book product
const updateBook = async(req,res,next)=>{
    const id =req.params.id;
    const {name,author,description,price,available,img}=req.body;
    let book;
    try{
        book =await Book.findByIdAndUpdate(id,{
                name,author,description,price,available,img
        });
        book =await book.save();
    }catch(err){
            console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"Unnable to Update "})
    }
    return res.status(200).json({book})

}

//delete book product
const deleteBook = async (req,res,next)=>{
    const id =req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id)
    }catch(err){
            console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"Unnable to delete "})
    }
    return res.status(200).json({book})
}

//exports all function

exports.getAllBooks=getAllBooks;
 exports.addBook =addBook;
 exports.getById=getById;
 exports.updateBook=updateBook;
 exports.deleteBook=deleteBook;