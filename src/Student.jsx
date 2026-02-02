function Student(props){
    return(
     <>
    <div style={{
        textAlign: "center",
        border: "5px solid  rgb(226, 186, 219, 1)",
        padding: "10px",
        marginBottom: "5px",
        borderRadius: "20px"}}>
            <h3>Học sinh: {props.name}</h3>
            <h3>Tuổi: {props.age}</h3>
            <h3>Lớp: {props.className}</h3>
    </div>
    </>
    )
}
export default Student;