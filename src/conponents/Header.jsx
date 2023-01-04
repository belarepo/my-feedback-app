export default function Header() {
    const colors = {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: '#ff6a65'
    }

    return (
        <header style={colors}>
            <div className='container'>
                <h2>Feedback UI</h2>
            </div>
        </header>
    )
}
