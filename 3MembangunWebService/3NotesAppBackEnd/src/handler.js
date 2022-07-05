const {nanoid} = require('nanoid');
const notes = require('./notes.js');
const addNoteHandler = (request, h)=>{
    const {title, tags, body} = request.payload;
    const id = nanoid(16);
    const createAt = new Date().toISOString();
    const updateAt = createAt;

    const newNote = {
        title, tags, body, id, createAt, updateAt
    };    

    notes.push(newNote);
    // check object with key id isEqual with id in handler, if note.id equal with id in array notes. so the length is more than 0
    const isSuccess = notes.filter((note)=> note.id == id).length > 0;
    if(isSuccess){
        const response = h.response({
            "status" : "success",
            "message" : "catatan berhasil ditambahkan",
            "data": {
                "noteId":id,
            },
        });
        response.code(201);
        return response;
    }
    // if fails
    const response = response.h({
        status : 'fail',
        message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
};

const getAllNotesHandler = ()=>({
    status: 'success',
    data:{
        notes,
    },
});

const getNoteByIdHandler=(request, h)=>{
    const {id} = request.params;
    const note = notes.filter((n)=>n.id === id)[0];
    if(note !== undefined){
        return{
            status:'success',
            data:{
                note,
            },
        };
    };
    const response = h.response({
        status:'fail',
        message:'catatan tidak ditemukan',
    });
    response.code(404);
    return response;
}
// using object literal for module.exports=> untuk lebih dari satu nilai;
module.exports = {addNoteHandler, getAllNotesHandler, getNoteByIdHandler};