import Title from '../../components/Title'

export default function usingTitle() {
    return (
        <div>
            <Title
                main='Register page'
                description='Include, to alter and delete things!'
            />
            <Title
                main='Login page'
                description='Please Enter your login and password!'
                small
            />
            <Title
                main='Login page'
                description='Please Enter your login and password!'
                small={true}
            />
        </div>
    )
}