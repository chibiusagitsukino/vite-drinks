import styled from 'styled-components'

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 3rem;
  color: #3a3a3a;
`

const ListWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: 10px;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
  color: #3a3a3a;
`

const Separator = styled.hr`
  border: 0;
  width: 80%;
  border-bottom: 1px dashed #3a3a3a;
  border-width: 4px;
`

const CategoryWrapper = styled(ListWrapper)`
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`

const CategoryItem = styled(ListItem)`
  padding: 4px 8px;
  cursor: pointer;
  border: 1px solid #7e7e7e;

  &:hover{
    background-color: #555;
    color: #fff;
    transform: scale(1.1,1.1)
  }
`

const Hero = ({ setCategory }) => {
  const onHandleClick = (value) => {
    setCategory(value)
  }

  return (
    <HeroWrapper>
      <Title>The Revival of The Soft Drink</Title>
      <ListWrapper className='firstList'>
        <ListItem>Martinis</ListItem>
        <ListItem>Classics</ListItem>
        <ListItem>Signatures</ListItem>
        <ListItem>V & T</ListItem>
      </ListWrapper>
      <Separator />
      <CategoryWrapper className='secondList'>
        <CategoryItem onClick={() => onHandleClick('Ordinary Drink')}>
          Ordinary Drink
        </CategoryItem>
        <CategoryItem onClick={() => onHandleClick('Cocktail')}>
          Cocktail
        </CategoryItem>
        <CategoryItem onClick={() => onHandleClick('Shot')}>Shot</CategoryItem>
        <CategoryItem onClick={() => onHandleClick('Punch / Party Drink')}>
          Punch / Party Drink
        </CategoryItem>
        <CategoryItem onClick={() => onHandleClick('Coffee / Tea')}>
          Coffee / Tea
        </CategoryItem>
        <CategoryItem onClick={() => onHandleClick('Other / Unknown')}>
          Other / Unknown
        </CategoryItem>
      </CategoryWrapper>
    </HeroWrapper>
  )
}

export default Hero
