export default function Button({ type, text, onClick }) {

     const styleType1 = { borderRadius: "8px", backgroundColor: "#2DAAE2", color: "white" }
     const styleType2 = { borderRadius: "8px", border: "1px solid #2DAAE2", color: "#2DAAE2" }

     return (
          <button style={type === 1 ? styleType1 : styleType2} className="p-2" onClick={onClick}>
               <small>{text}</small>
          </button>
     )
}