import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 70%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  left: 15%;
  z-index: 1;
  transition: left 0.3s ease-in-out;
`;

export const LeftButton = styled.button`
  position: absolute;
  left: 20px;
  top: 40%;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  font-size: 30px;
  padding: 20px;
  border: none;
  color: white;
  z-index: 2;
`;

export const RightButton = styled.button`
  position: absolute;
  right: 20px;
  top: 40%;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  font-size: 30px;
  padding: 20px;
  border: none;
  color: white;
  z-index: 2;
`;
