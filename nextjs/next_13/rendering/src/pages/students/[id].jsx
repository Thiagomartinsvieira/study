export async function getStaticPaths() {
    const resp = await fetch(`http://localhost:3000/api/students/tutors`);
    const ids = await resp.json();

    const paths = ids.map(id => {
        return { params: { id: `${id}` } };
    });

    return {
        fallback: true, // 404
        paths,
    };
}

export async function getStaticProps({ params }) {
    const resp = await fetch(`http://localhost:3000/api/students/${params.id}`);
    const student = await resp.json();

    return {
        props: {
            student,
        },
    };
}

const StudentById = (props) => {
    const { student } = props; // Use props.student instead of just student

    return (
        <div>
            <h1>Students Details</h1>
            {student ?
                <ul>
                    <li>{student.id}</li>
                    <li>{student.name}</li>
                    <li>{student.email}</li>
                </ul>    
            : false    
        }

        </div>
    );
};

export default StudentById;
