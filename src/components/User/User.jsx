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
import {AiFillEdit, AiFillDelete, AiFillSave} from 'react-icons/ai'
import './user.css'

const User = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`https://crud-backend-assessment.herokuapp.com/users`)
      .then(response => response.json())
      .then(
        (data) => {
          setUsers(data)
        }
      )
  }, [])


  return (
    <Box textAlign={'center'}>
      <Typography fontSize={60} fontWeight={'lighter'}>users</Typography>
      <Grid container justifyContent={'center'}>
        <Grid item xs={10} md={8}>
          <Card>
          <Button className='btn__create' variant={'outlined'} startIcon={<AiFillSave/>}>Create</Button>
            <TableContainer>
              <Table sx={{minWidth: 650}} aria-label="simple table">
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
                      sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                      <TableCell>
                         {user.name}
                      </TableCell>
                      <TableCell>
                        {user.email}
                      </TableCell>
                      <TableCell>
                        {user.department}
                      </TableCell>
                      <TableCell>    
                        <div className='btn'>
                        <Button variant={'outlined'} startIcon={<AiFillEdit/>}>Edit</Button>
                          <Button variant={'outlined'} startIcon={<AiFillDelete/>}>Delete</Button>
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