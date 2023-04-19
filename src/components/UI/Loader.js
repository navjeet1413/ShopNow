import ReactDom from 'react-dom'

export const Backdrop = props => {
    const handleClick = () => {
        if(props.onClose) {
            props.onClose();
        }
    }

    return (
        <div onClick={handleClick} className="loader-overlay"></div>
    )
}

const Loader = () => {
    return (
        ReactDom.createPortal(
            //takes two arguments first child and second Container(where to show)
            //it creates seperate component outside the parent node
            //its creating component outside the root node
            <>
            <Backdrop/>
            <div className="loading-dots">
                <div>Loading</div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>
            </>,
            document.getElementById("loader-root")
        )
    )
}

export default Loader