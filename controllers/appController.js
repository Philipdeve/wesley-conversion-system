

const homepage = async(req, res) => {
    res.render('index')
}

const transferPage = async(req, res) => {
    res.render('transfer')
}


export {homepage, transferPage}