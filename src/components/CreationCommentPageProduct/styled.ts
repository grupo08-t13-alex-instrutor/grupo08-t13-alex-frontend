import styled from "styled-components";

const ButtonGrey = styled.button`
    width: auto;
    height: auto;
    padding: 5px 10px;
    border: 2px solid transparent;
    border-radius: 24px;
    box-sizing: border-box;
    background-color: #E9ECEF;
    
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color: #868E96;
    
    @media (min-width: 720px) {
        :hover {
            border: 2px solid #868E96;
        }
    }
`;

const SectionComment = styled.section`
    width: auto !important;
    min-width: 300px;
    max-width: 750px;
    height: auto;
    padding: 25px 15px;
    margin: 10px !important;
    border-radius: 4px;
    background-color: ${props => props.theme.gray10};
    box-sizing: border-box;

    article{
        gap: 0.5rem;
        align-items: center;
        display: flex;
        margin-bottom: 5px;

        article{
            background-color: ${props => props.theme.random1};
            color: ${props => props.theme.whiteFixed};
            border-radius: 100%;
            height: 2rem;
            width: 2rem;
            align-items: center;
            justify-content: center;
        }

        span{
            color: ${props => props.theme.gray2};
        }
    }

    form{
        width: 100% !important;
        margin: 5px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;

        textarea{
            min-height: 100px;
            padding: 5px;
            margin-bottom: 10px;
            font-weight: 400;
            font-size: 16px;
            color: ${props => props.theme.gray3};
            resize: none;
            border: 1.5px solid #E9ECEF;
            border-radius: 4px;
            outline: none; 

            :focus {
                border: 1.5px solid #4529E6;
                color: rgb(73, 80, 87);
            }
        }

        button {
            width: fit-content;
        }
    }


    div{
        width: auto !important;
        margin: 0 !important;
        gap: 1rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media (min-width: 720px) {
        margin: 10px auto !important;

        form > button {
            margin: 0 10px 10px auto;
        }
    }
`

export { ButtonGrey, SectionComment }