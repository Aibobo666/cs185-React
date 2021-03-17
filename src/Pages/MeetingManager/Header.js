import './Meeting.css';

const Header = ({onAdd,showAdd}) => {
    return (
        <header className='header'>
            <h1>Zoom Meeting Manager</h1>
    <button className="btn" onClick={onAdd} >{showAdd ? 'Full Schedule' : 'Create a meeting'}</button>
        </header>

    )
}


export default Header
