import "./button.css";
const sayHello = () => {
    alert("Olá, mundo!");
}


const Button = ({ label = 'Clique aqui' }) => {
    return <button className="btn" onClick={sayHello}>{label}</button>;
}

export default Button;