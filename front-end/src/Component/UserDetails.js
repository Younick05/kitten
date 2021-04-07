import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';


const UserCard = (props) => {
  const {size, type, value} = props
  return (
    <Grid item xs={size} style={{ margin: 5 }}>
      <Card>
        <CardContent>
          <Typography variant='h6' align='center'>{type} {''} {value}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

class UserDetails extends Component {
  render() {
    return (
      <>
        <Grid container>
          <UserCard size={3} type={'Win :'} value={'5'} />
          <UserCard size={5} value={'NIKHIL'} />
          <UserCard size={3} type={'Loose :'} value={'5'} />
        </Grid>
      </>
    )
  }
}

const mapStateToProps =  (state, {form, card}) => {
  console.log(" check here ", state)
  console.log(" check here 2 ", form)
  console.log(" check here 3 ", card)
  return {
    userDetails : form && form.userDetails
  }
};

export default connect(
  mapStateToProps
)(UserDetails);