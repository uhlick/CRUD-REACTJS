import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/Goalfy/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {

            activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[nome,nomechange]=useState("");
    const[email,emailchange]=useState("");
    const[telefone,telefonechange]=useState("");
    const[cnpj,cnpjchange]=useState("");
    const[endereco,enderecochange]=useState("");
    const[cidade,cidadechange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);

    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={nome,email,telefone,cnpj,endereco,cidade,active};
      

      fetch("http://localhost:8000/Goalfy/"+empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Editar Cliente</h2>
                            <Link to="/" className="btn btn-danger">X</Link>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Nome do cliente</label>
                                        <input required value={nome} onMouseDown={e=>valchange(true)} onChange={e=>nomechange(e.target.value)} className="form-control"></input>
                                    {nome.length==0 && validation && <span className="text-danger">Coloque um nome</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Telefone</label>
                                        <input value={telefone} onChange={e=>telefonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>CNPJ</label>
                                            <input value={cnpj} onChange={e=>cnpjchange(e.target.value)} className="form-control"></input>
                                            {cnpj.length==0 && validation && <span className="text-danger">Digite um Cnpj</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Endereço</label>
                                            <input value={endereco} onChange={e=>enderecochange(e.target.value)} className="form-control"></input>
                                            {endereco.length==0 && validation && <span className="text-danger">Digite um endereço</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Cidade</label>
                                            <input value={cidade} onChange={e=>cidadechange(e.target.value)} className="form-control"></input>
                                            {cidade.length==0 && validation && <span className="text-danger">Digite uma cidade</span>}
                                        </div>
                                    </div>

                                <div className="col-lg-12">
                                    <div className="form-check">
                                    <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                        <label  className="form-check-label">Ativo</label>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Salvar</button>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default EmpEdit;