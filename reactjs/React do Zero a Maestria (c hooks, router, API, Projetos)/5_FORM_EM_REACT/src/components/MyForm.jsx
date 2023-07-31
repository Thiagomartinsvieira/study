import './MyForm.css'

const MyForm = () => {
    return (
        <div>
            {/* 1 - criacao de form */}
            <form>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" name='text' placeholder='Insert your name' />
                </div>
                {/* 2 - Label involving input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name='email' placeholder='Insert your email addres' />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default MyForm