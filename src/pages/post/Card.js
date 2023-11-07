import styled from 'styled-components'

export default function Cards(items) {
  return (
    <>
      <div>
        {items.items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

function Card(item) {
  const Div = styled.div`
    padding: 100px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-radius: 16px;
    border: 1px solid black;
    background-color: white;
  `
  return (
    <>
      <Div>{item.item.title}</Div>
    </>
  )
}
