const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.get("/", (req, res)=>{
    res.render("pages/index-adm");
})

router.get("/adm-cliente", (req, res)=>{
    res.render("pages/adm-cliente");
})

router.get("/adm-cliente-novo", (req, res)=>{
    res.render("pages/adm-cliente-novo");
})

router.get("/adm-cliente-edit", (req, res)=>{
    res.render("pages/adm-cliente-edit");
})

router.get("/adm-cliente-list", (req, res)=>{
    res.render("pages/adm-cliente-list");
})

router.get("/adm-cliente-del", (req, res)=>{
    res.render("pages/adm-cliente-del");
})


router.post(
    "/adm-cliente-novo",
    body("nome")
        .isLength({ min: 3, max: 100 })
        .withMessage("O nome deve ter pelo menos 3 caracteres"),
    body("cep")
        .isLength({ min: 8, max: 8 })
        .withMessage("O CEP deve ter 8 caracteres"),
    body("nomeUsurario")
        .isLength({ min: 3, max: 20 })
        .withMessage("O nome de usuário deve ter entre 3 e 20 caracteres"),
    body("email")
        .isEmail()
        .withMessage("O email deve ser válido"),
    body("senha")
        .isLength({ min: 6 })
        .withMessage("A senha deve ter pelo menos 6 caracteres"),
    function(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            return res.render("pages/adm-cliente-novo", {
                erros: errors.array(),
                valores: req.body,
                retorno: null
            });
        }
        res.send("Cadastro válido!");
    }
);




module.exports = router;