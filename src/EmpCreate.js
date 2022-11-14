import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCursorText } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { BsCardList } from 'react-icons/bs'




const EmpCreate = () => {

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
      

      fetch("http://localhost:8000/Goalfy",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Salvo com sucesso.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div className="newclient">
                    <form className="containe" onSubmit={handlesubmit}>
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <div className="svgeclient">
                                <svg className="svglogo" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 6.00001C3.28174 6.00001 2.97652 6.12643 2.75147 6.35148C2.52643 6.57652 2.4 6.88175 2.4 7.20001V20.4C2.4 20.7183 2.52643 21.0235 2.75147 21.2485C2.97652 21.4736 3.28174 21.6 3.6 21.6H16.8C17.1183 21.6 17.4235 21.4736 17.6485 21.2485C17.8736 21.0235 18 20.7183 18 20.4V13.2C18 12.5373 18.5373 12 19.2 12C19.8627 12 20.4 12.5373 20.4 13.2V20.4C20.4 21.3548 20.0207 22.2705 19.3456 22.9456C18.6705 23.6207 17.7548 24 16.8 24H3.6C2.64522 24 1.72955 23.6207 1.05442 22.9456C0.379285 22.2705 0 21.3548 0 20.4V7.20001C0 6.24523 0.379284 5.32955 1.05442 4.65442C1.72955 3.97929 2.64522 3.60001 3.6 3.60001H10.8C11.4627 3.60001 12 4.13726 12 4.80001C12 5.46275 11.4627 6.00001 10.8 6.00001H3.6Z" fill="#7F23F7"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3999 1.2C14.3999 0.537258 14.9372 0 15.5999 0H22.7999C23.4626 0 23.9999 0.537258 23.9999 1.2V8.4C23.9999 9.06274 23.4626 9.6 22.7999 9.6C22.1372 9.6 21.5999 9.06274 21.5999 8.4V2.4H15.5999C14.9372 2.4 14.3999 1.86274 14.3999 1.2Z" fill="#7F23F7"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6484 0.351472C24.1171 0.820101 24.1171 1.5799 23.6484 2.04853L10.4484 15.2485C9.9798 15.7172 9.22 15.7172 8.75137 15.2485C8.28275 14.7799 8.28275 14.0201 8.75137 13.5515L21.9514 0.351472C22.42 -0.117157 23.1798 -0.117157 23.6484 0.351472Z" fill="#7F23F7"/>
                                </svg>
                                <h2 className="newclient">Novo Cliente</h2>
                                </div>

                                    <Link to="/" className="btn-clos">&#10005;</Link>
                            </div>
                            <svg className="bar" width="427" height="1" viewBox="0 0 427 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="427" height="1" transform="matrix(1 0 0 -1 0 1)" fill="#E7E7E7"/>
                            </svg>

                            <div className="card-body">

                                <div className="row">

                                <div className="col-lg-12">
                                        <div className="form-group">
                                            
                                            <label>Nome do Cliente</label>

                                         <input required value={nome}  onMouseDown={e=>valchange(true)} onChange={e=>nomechange(e.target.value)} 
                                            className="form-controler"
                                             placeholder="Digite aqui..."
                                             ></input>
                                             
                                            <BsCursorText   className="icon"
                                                style={{
                                                    position: 'absolute', display: 'flex', right: '441px', top: '139px', color: '#949FA6',width: '18px', height: '20px',
                                                                }}size="50px" color="black"/> 
                                                                {nome.length==0 && validation && <span className="text-danger"></span>}
                                        </div>

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input required value={email} onMouseDown={e=>valchange(true)} onChange={e=>emailchange(e.target.value)} className="form-controler" placeholder="Digite aqui..."></input>
                                        {email.length==0 && validation && <span className="text-danger"></span>}
                                        <MdOutlineAlternateEmail className="icon"
                                                style={{
                                                    position: 'absolute', display: 'flex', right: '441px', top: '211px', color: '#949FA6',width: '16px', height: '20px',
                                                                }}size="50px" color="black"/> 
                                                                {email.length==0 && validation && <span className="text-danger"></span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Telefone</label>

                                            <input required value={telefone} onMouseDown={e=>valchange(true)} onChange={e=>telefonechange(e.target.value)} className="form-controler" placeholder="Digite aqui..." ></input>
                                        {telefone.length==0 && validation && <span className="text-danger"></span>}
                                        <BsTelephone className="icon"
                                                style={{
                                                    position: 'absolute', display: 'flex', right: '441px', top: '284px', color: '#949FA6',width: '16px', height: '20px',
                                                                }}size="50px" color="black"/> 
                                                                {telefone.length==0 && validation && <span className="text-danger"></span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>CNPJ</label>
                                            <input required value={cnpj} onMouseDown={e=>valchange(true)} onChange={e=>cnpjchange(e.target.value)} className="form-controler" placeholder="Digite aqui..."></input>
                                        {cnpj.length==0 && validation && <span className="text-danger"></span>}
                                        <BsCardList className="icon"
                                                style={{
                                                    position: 'absolute', display: 'flex', right: '441px', top: '357px', color: '#949FA6',width: '16px', height: '20px',
                                                                }}size="50px" color="black"/> 
                                                                {cnpj.length==0 && validation && <span className="text-danger"></span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Endereço</label>
                                            <input required value={endereco} onMouseDown={e=>valchange(true)} onChange={e=>enderecochange(e.target.value)} className="form-controler" placeholder="Digite aqui..."></input>
                                        {endereco.length==0 && validation && <span className="text-danger"></span>}
                                        <BsCursorText   className="icon"
                                                style={{
                                                    position: 'absolute', display: 'flex', right: '441px', top: '429PX', color: '#949FA6',width: '18px', height: '20px',
                                                                }}size="50px" color="black"/> 
                                                                {endereco.length==0 && validation && <span className="text-danger"></span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Cidade</label>
                                            <input required value={cidade} onMouseDown={e=>valchange(true)} onChange={e=>cidadechange(e.target.value)} className="form-controler" placeholder="Digite aqui..."></input>
                                        {cidade.length==0 && validation && <span className="text-danger"></span>}
                                        <BsCursorText   className="icon"
                                                style={{
                                                    position: 'absolute', display: 'flex', right: '441px', top: '503PX', color: '#949FA6',width: '18px', height: '20px',
                                                                }}size="50px" color="black"/> 
                                                                {cidade.length==0 && validation && <span className="text-danger"></span>}
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="button-cadastrar" type="submit">Cadastrar</button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                    <Link to="Goalfy/cep" className="button-cadastrar">CONSULTA CEP</Link>

        </div>
    );
}

export default EmpCreate;