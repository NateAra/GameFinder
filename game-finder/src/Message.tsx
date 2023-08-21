const Message = () => {

    const name = 'Johny';
    if (name) {
        return (
            <h1>Morning! {name}!</h1>
        )
    }

    return (
        <h1>Am Back</h1>
    )
}

export default Message;