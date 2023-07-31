import './MyForm.css'

const MyForm = () => {
    return (
        <div>
            {/* 1 - criacao de form */}
            <form>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" name='text' placeholder='Digite seu nome' />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default MyForm