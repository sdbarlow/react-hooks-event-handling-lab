// Code EyesOnMe Component Here

function EyesOnMe(){
    return(
        <button onBlur={() => console.log('Hey! Eyes on me!')} onFocus={() => console.log('Good!')}>Eyes on me</button>
    )
}

export default EyesOnMe