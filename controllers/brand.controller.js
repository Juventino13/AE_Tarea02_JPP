const http = require('http');
const path = require('path');
const status = require('http-status');

let _brand;

const createBrand = (req, res) => {
    const brand = req.body;

    _user.create(brand)
        .then((data)=> {
            res.status(200);
            res.json({msg:"Brand creada correctamente", data: data});
        })
        .catch((err)=> {
            res.status(400);
            res.json({msg:"Error!!!!", data:err});
        })

        .catch((err)=> {
            res.status(status.BAD_REQUEST);
            res.json({msg:" EXITO"});
        });
    }
    

const findAll= (res,req) =>{
    _brand.find()
        .then((data) => {
            if (data.length==0) {
                res.status(status.NO_CONTENT);
                res.json({msg: "No se encontraron marcas"}); 
            }else {
                res.status(status.OK);
                res.json({msg:"EXITO",data:data})
            }
    })
}
 
const deleteById  = (req,res)=>{
    const {id} = req.params; 
    //const id req.params.id;
    const params = {
        _id:id 
    }; 
   
    brand.findByAndRemove (params)
    .then ((data)=> {
        res.status(status.OK);
        res.json({MST:"EXITO",data:data});

    })
    .catch((err) => {
        res.status(status.NOT_FOUND);
        res.json
    })
}


module.exports = (Brand) => {
    _brand = Brand;
    return({
        createBrand,
        findAll,
        deleteById     
    });
}

//actualizar de user  (nombre email password,   )
//actualizar de marca 