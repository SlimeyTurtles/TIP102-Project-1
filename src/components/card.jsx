export default ({image_path, name, type}) => {
    return (
        <div className='Card'>
            <img src={`/${image_path}.png`} alt={`${image_path} image`}/>
            <h3>{name}</h3>
            <h4>{type}</h4>
            <button>View Menu</button>
        </div>
    )
}