import styled from "styled-components";

const StyledAdPage = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;

    padding: 5.87rem 0 0.625rem 0;

    .NotcreateComment{

            .formNotActivate{

                textarea{
                        border: 1px solid ${props => props.theme.gray5};
                        color: none;
                }

                button{
                    width: 8rem;
                    height: auto;
                    padding: 5px 10px;
                    border: 2px solid transparent;
                    border-radius: 4px;
                    box-sizing: border-box;
                    background-color: rgb(233, 236, 239);
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 24px;
                    color: rgb(134, 142, 150);
                    cursor: "not-allowed";
                }

                button,textarea{
                    cursor: ${props => {
                                if (!localStorage.getItem("token")) {
                                    return `not-allowed`
                                }
                            }};
                    }
            }

        }
    }

    ul {
        li {
            .bodyComment {
                width: 100%;
            }
        }
    }

    .descriptionAdds {
        width: 23.6rem;
    }

    .createComment {
        margin-left: 1rem;

        form {
            width: 96%;
            div {
                width: 25%;
            }
        }

        div {
            width: 95%;
        }
    }

    .TitleAdContainer {
        div {
            width: 100%;
        }

        .container {
            margin-left: 0;
        }
    }

    .backgroundBrand1 {
        background-color: ${(props) => props.theme.brand1};

        width: 100%;
    }
    @media (max-width: 720px) {
        flex-direction: column-reverse;
    }
`;

const StyledAside = styled.aside`
    float: right;
    > div {
    }
`;

export { StyledAdPage, StyledAside };
