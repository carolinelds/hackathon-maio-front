export default function Answer({answer, setCorrect}){
    return(
        <p onClick={()=> {
            if(answer.answer){
                setCorrect(true);
            } else {
                setCorrect(false);
            }
        }}>{answer.title}</p>
    )
}