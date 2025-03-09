import { useEffect, useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import { Link } from "react-router-dom";
import axios from "../../services/axios";
import { ProfilePicture, StudentContainer } from "../Student/styled";
import { FaUserCircle, FaEdit, FaWindowClose } from "react-icons/fa";

export default function Login() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("/students");
      setStudents(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Students</h1>
      <StudentContainer>
        {students.map((student) => (
          <div key={String(student.id)}>
            <ProfilePicture>
              {student.Photos[0]?.url ? (
                <img src={student.Photos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <p>{student.name}</p>
            <p>{student.email}</p>
            <Link to={`/>students/`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/students/${student.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
