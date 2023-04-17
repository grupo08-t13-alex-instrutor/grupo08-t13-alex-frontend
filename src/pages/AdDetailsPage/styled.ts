import styled from "styled-components";

const StyledHome = styled.div`
  
padding-top: 5rem;

div, section{
width:  50%;
margin-left: 1rem;
}

ul{
  li{
    .bodyComment{
      width: 100%;
    }
  }
}

.descriptionAdds{
width: 23.6rem;
}

.createComment{
  margin-left: 1rem;

  form{
    width: 96%;
    div{
      width: 25%;
    }
  }

div{
  width: 95%;
}
}

.TitleAdContainer{

  div{
    width: 100%;
  }

  .container{
    margin-left:0;
  }

}

.backgroundBrand1{
  background-color: ${props => props.theme.brand1}

  width: 100%;  
}


`;

export default StyledHome