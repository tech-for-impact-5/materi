function CardProduct ({name, img, price}) {
  return (
    <div className="border-black border-solid border-2">
      <img src={img} alt="" width={200}/>
      <h1>{name}</h1>
      <span>{price}</span>
    </div>
  )
}

export default CardProduct