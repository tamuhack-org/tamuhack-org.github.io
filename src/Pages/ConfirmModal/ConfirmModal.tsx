import React, { CSSProperties } from 'react';
import QrReader from 'react-qr-reader';
import { LoginData, QRData } from '../../types/TypeObjects';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IProps {
  userData: LoginData;
  event: string;
  attribute: string;

  qrData: QRData;
  modalVisible: boolean;
  registeredStatus: boolean;
  closeModal: () => void;
}

interface IState {
  participantRegistered: boolean;
}

class ConfirmModal extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {participantRegistered: props.registeredStatus}
  }

  checkInUser = async () => {
    const checkInUrl = "https://register.tamuhack.com/api/volunteer/checkin";

    await axios.post(checkInUrl, 
      {
        "email": this.props.qrData.email
      },
      {
      headers: {
        authorization: "Token " + this.props.userData.data.token,
        "content-type": "application/json"
      }
    }).then(response => {
      this.setState({ participantRegistered: true });
    }).catch(exception => {
      console.log(exception);
    })
  }

  render() {
    return (
    <div style={style.modalContainer}>
        <Rodal 
          visible={this.props.modalVisible} 
          onClose={this.props.closeModal}
          animation="slideUp"
          width={'70vw'}
          height={350}
          customStyles={{ marginBottom: 0, justifyContent: 'flex-end', paddingLeft: 25, paddingRight: 25 }}
        >
          <div style={style.badgeContainer}>
            <Badge style={{ marginRight: 15, padding: 10, backgroundColor: '#FFD9D9', fontSize: 15 }}>
              {this.props.event ? this.props.event : "No Event"}
            </Badge>
            <Badge style={{ padding: 10, backgroundColor: '#D9EFFF', fontSize: 15 }}>
              {this.props.attribute ? this.props.attribute : "No Attribute"}
            </Badge>
          </div>
          <div>
            <p style={{ display: 'flex', fontSize: 23, fontWeight: 'bold' }}>{this.props.qrData.first_name} {this.props.qrData.last_name}</p>
          </div>
          <div style={style.emailRow}>
            <p style={{ fontSize: 16, fontWeight: 'bold', margin: 0, paddingLeft: 0}}>
              Email
            </p>
            <p style={{ fontSize: 14, margin: 0 }}>
              {this.props.qrData.email}
            </p>
          </div>
          <div style={{...style.checkInStatusRow, borderColor: this.state.participantRegistered ? '#5CD059' : '#FFBFBF', fontSize: 20}}>
            <p style={{ display: 'flex', margin: 0, padding: 0}}>
              {this.state.participantRegistered ? 'CHECKED IN' : 'NOT CHECKED IN'}
            </p>
          </div>
          <Button
            style={style.confirmButton}
            disabled={this.state.participantRegistered}
            onClick={this.checkInUser}
          >
            Check In
          </Button>
        </Rodal>
      </div>
      );
    }
  }
  
    const style : { [key: string]: React.CSSProperties } = {
        modalContainer: {
            display: 'flex',
            backgroundColor: 'white',
            height: 350,
            padding: 30,
        },
        checkInStatusRow: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: '5px',
            borderStyle: 'solid',
            marginBottom: 50,
            paddingTop: 5,
            paddingBottom: 5
        },
        emailRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 0,
            paddingBottom: 10,
            marginBottom: 20,
            borderBottom: '1px #DEDEDE solid',
        },
        confirmButton: {
            display: 'flex', 
            justifyContent: 'center', 
            width: '100%', 
            height: '60px', 
            backgroundColor: '#FF7C93', 
            border: '0', 
            fontSize: '18px'
        },
        badgeContainer: {
            display: 'flex', 
            flexDirection: 'row', 
            paddingBottom: 0, 
            marginBottom: 15
        }
    };

    const mapStateToProps = state => ({
        event: state.selection.event,
        attribute: state.selection.attribute,
        userData: state.auth.userData,
    });

    export default connect(mapStateToProps)(ConfirmModal);
  