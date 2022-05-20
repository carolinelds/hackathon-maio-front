import styled from "styled-components";

import bookLoading from "./../assets/images/bookLoading.gif";

export default function Loading() {
        return (
            <Div>
                <img className='loadingImage' src={bookLoading} alt="loading" />
            </Div>)
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .loadingImage{
        width: 30%;
    }`