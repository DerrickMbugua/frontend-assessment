import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { AiFillEdit, AiFillDelete, AiFillSave, AiOutlineUser } from 'react-icons/ai'
import './user.css'
import { Link } from 'react-router-dom'
import {useParams} from "react-router-dom"

const User = () => {
  const [users, setUsers] = useState([])

  const {id} = useParams()

  useEffect(() => {
    fetch(`https://crud-backend-assessment.herokuapp.com/users`)
      .then(response => response.json())
      .then(
        (data) => {
          setUsers(data)
        }
      )
  }, [])

  const handleClick = (id) => {

    fetch('https://crud-backend-assessment.herokuapp.com/users/' + id, {
        method: 'DELETE',
        
    }).then(() => {
        alert('User deleted' + id)     
    })
};


  return (
    <Box textAlign={'center'}>
      <Typography fontSize={60} fontWeight={'lighter'}>users</Typography>
      <Grid container justifyContent={'center'}>
        <Grid item xs={10} md={8}>
          <Card>
            <Link to="/create">
              <Button className='btn__create' variant={'outlined'} startIcon={<AiFillSave />}>Create</Button>
            </Link>



            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow
                      key={user.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>
                        <div className='user'>
                          <AiOutlineUser />
                          {user.name}
                        </div>

                      </TableCell>
                      <TableCell>
                        {user.email}
                      </TableCell>
                      <TableCell>
                        {user.department}
                      </TableCell>
                      <TableCell>
                        <div className='btn'>
                          <Link to={`/${user.id}`}>
                            <Button variant={'outlined'} startIcon={<AiFillEdit />}>Edit</Button>
                          </Link>

                          <Button variant={'outlined'} onClick={()=>handleClick(user.id)} startIcon={<AiFillDelete />}>Delete</Button>
                          

                        </div>

                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </Box>


  )

}

export default User