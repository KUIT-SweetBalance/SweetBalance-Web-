import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/button/Button';
import { useNavigate  } from "react-router-dom";
import { RecoringDrink } from '../../../../api/mypage/record/MypageRecord';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  
`;
const ModalContent=styled.div`
display: inline-flex;
padding: 20px;
margin: 0 20px;
flex-direction: column;
align-items: flex-start;

border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
`;
const Brand = styled.div`
color: #000;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.5px;
`;
const DrinkContent=styled.div`
display:flex;
gap:0;
flex-wrap: wrap;
word-break: break-word;
`;
const Drink = styled.div`
color: var(--primary, #722A2A);
font-family: 'Pretendard';
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: 30px; /* 120% */
letter-spacing: -0.625px;
`;

const Content = styled.div`
color: var(--text, #121212);
font-family: 'Pretendard';
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 30px;
letter-spacing: -0.5px;
`;
const ButtonBox = styled.div`
display:flex;
padding-top:24px;
width: 100%;
justify-content:space-evenly;
`;

const EditModal: React.FC<{ onClick: () => void;drink: RecoringDrink }> = ({ onClick, drink })  => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/mypage/record/${drink.beverageId}`, {
      state: { drink }, // ✅ 전체 drink 객체를 함께 전달
    });
  };

    return (
        <ModalContainer>
          <ModalContent>
            <Brand>{drink.brand}</Brand>
            <DrinkContent>
              <Drink>{drink.beverageName}</Drink>
              <Content>을/를 수정하시겠어요?</Content>
            </DrinkContent>
          <ButtonBox>
            <Button content='아니오' bgColor='bg-white' size='md'onClick={onClick}/>
            <Button content='수정할래요' bgColor='bg-primary' size='md'onClick={handleClick}/>
          </ButtonBox>

          </ModalContent>
        </ModalContainer>
    );
};

export default EditModal;