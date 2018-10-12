/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';

import CardView from 'react-native-cardview'
import { TextField } from 'react-native-material-textfield';
import styles from './Styles/ChatStyle'
import Validation from '../Config/ValidationConfig'
import DatePicker from '../Component/datepicker'

const textboxLabelFontSize = 12;
const textboxFontSize = 12;
const textboxTextColor = '#03A87C';
const textboxBaseColor = '#03A87C';
const NotoSan = 'NotoSans-Regular';
const OpenSan = 'OpenSans-Regular';
const SegoUi = 'Segoe UI, Regular';

export default class App extends Component {

  constructor(props) {
    console.disableYellowBox = true;
    super(props);
    this.state = {
      text: '',
      chatmsg: false,
      date: '',
      startDateError: '',
      contributionDateError: '',
      epfInfo: {
        UAN: {
          value: '',
          error: ''
        },
        EPFAccounNumber: {
          value: '',
          error: ''
        },
        StartDate: {
          value: '',
          error: ''
        },
        LastContributionDate: {
          value: '',
          error: ''
        },
        TotalBalance: {
          value: '',
          error: ''
        },
        LastContributedAmount: {
          value: '',
          error: ''
        },
      }
    };
    this.label = {
      uan: {
        labelText: <Text style={styles.mandatoryText}>UAN<Text style={styles.starIcon}> *</Text></Text>
      },
      EpfAccountNumber: {
        labelText: 'EPF Account Number'
      },
      startdate: {
        labelText: <Text style={styles.mandatoryText}>Start Date<Text style={styles.starIcon}> *</Text></Text>
      },
      lastContributeDate: {
        labelText: <Text style={styles.mandatoryText}>Last Contribution Date<Text style={styles.starIcon}> *</Text></Text>
      },
      totalbalance: {
        labelText: <Text style={styles.mandatoryText}>Total Balance<Text style={styles.starIcon}> *</Text></Text>
      },
      lastcontributedamount: {
        labelText: <Text style={styles.mandatoryText}>Last Contributed Amount<Text style={styles.starIcon}> *</Text></Text>
      }
    }

  }
  requestChat = () => {
    //console.log('aa')
    this.setState({
      chatmsg: true,
    })

  }
  validateData = (index, epfInfo) => {
    //const { epfInfo } = this.state;
    switch (index) {
      case 0: epfInfo.UAN.error = Validation.uanconfig.validate(epfInfo.UAN.value).message; break;
      case 1: epfInfo.EPFAccounNumber.error = Validation.accountNumber.validate(epfInfo.EPFAccounNumber.value).message; break;
      case 2: epfInfo.StartDate.error = Validation.startdat.validate(epfInfo.StartDate.value).message;
        if (epfInfo.StartDate.error) {
          startDateError: epfInfo.StartDate.error
        } else {
          startDateError: ''
        } break;
      case 3: epfInfo.LastContributionDate.error = Validation.lastcontributedate.validate(epfInfo.LastContributionDate.value).message;
        if (epfInfo.LastContributionDate.error) {
          contributionDateError: epfInfo.LastContributionDate.error
        } else {
          contributionDateError: ''
        } break;
      case 4: epfInfo.TotalBalance.error = Validation.totalbal.validate(epfInfo.TotalBalance.value).message; break;
      case 5: epfInfo.LastContributedAmount.error = Validation.lastcontribteamount.validate(epfInfo.LastContributedAmount.value).message; break;
    }
    this.setState({ epfInfo })
  }


  showEPFDetails = () => {
    const { epfInfo } = this.state;
    return (

      <CardView cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={{
          paddingBottom: 10,
          paddingRight: 5
        }}>
        <View style={styles.firstRow}>
          <View style={styles.firstRowCol1}>
            <TextField
              maxLength={20}
              tintColor={textboxBaseColor}
              labelTextStyle={{ fontFamily: OpenSan, fontSize: 12 }}
              value={this.state.epfInfo.UAN.value}
              label={this.label.uan.labelText}
              error={this.state.epfInfo.UAN.error}
              labelFontSize={textboxLabelFontSize}
              fontSize={textboxFontSize}
              fontFamily={OpenSan}
              textColor={textboxTextColor}
              baseColor={textboxBaseColor}
              onChangeText={uan => {
                epfInfo.UAN.value = uan;
                this.setState({ epfInfo });
              }}
              onBlur={() => {
                const uan = epfInfo.UAN.value.replace(/ $/g, '');
                epfInfo.UAN.value = uan;
                epfInfo.UAN.error = Validation.uanconfig.validate(epfInfo.UAN.value);
                this.setState({ epfInfo });
                this.validateData(0, this.state.epfInfo)
              }}
            />

          </View>
          <View style={styles.firstRowCol2}>
            <TextField
              maxLength={20}
              labelTextStyle={{ fontFamily: OpenSan, fontSize: 12 }}
              tintColor={textboxBaseColor}
              value={this.state.epfInfo.EPFAccounNumber.value}
              label={this.label.EpfAccountNumber.labelText}
              error={this.state.epfInfo.EPFAccounNumber.error}
              labelFontSize={textboxLabelFontSize}
              fontSize={textboxFontSize}
              textColor={textboxTextColor}
              baseColor={textboxBaseColor}
              onChangeText={AccountNumber => {
                epfInfo.EPFAccounNumber.value = AccountNumber;
                this.setState({ epfInfo });
              }}
              onBlur={() => {
                const AccountNumber = epfInfo.EPFAccounNumber.value.replace(/ $/g, '');
                epfInfo.EPFAccounNumber.value = AccountNumber;
                this.setState({ epfInfo });
                this.validateData(1, this.state.epfInfo)
              }}
            />
          </View>
        </View>
        <View style={styles.secondRow}>
          <View style={styles.firstRowCol1}>
            <DatePicker
              style={{ width: 280, color: '#333333' }}
              date={epfInfo.StartDate.value}
              mode="date"
              placeholder={this.label.startdate.labelText}
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {
                epfInfo.StartDate.value = date;
                this.setState({ epfInfo });
                this.validateData(2, epfInfo)
              }}
            />
          </View>
          <View style={styles.firstRowCol2}>
            <DatePicker
              style={{ width: 280, }}

              date={epfInfo.LastContributionDate.value}
              mode="date"
              placeholder={this.label.lastContributeDate.labelText}
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,

                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {
                epfInfo.LastContributionDate.value = date;
                this.setState({ epfInfo });
                this.validateData(3, epfInfo)
              }}
            />
            <Text style={{ color: 'rgba(213,0,0,1)', fontSize: 12, paddingTop: 3 }}>{this.state.contributionDateError}</Text>
          </View>
        </View>
        <View style={styles.firstRow}>
          <View style={styles.firstRowCol1}>
            <TextField
              labelTextStyle={{ fontFamily: OpenSan, fontSize: 12 }}
              maxLength={20}
              prefix='₹ '
              tintColor={textboxBaseColor}
              value={this.state.epfInfo.TotalBalance.value}
              label={this.label.totalbalance.labelText}
              error={this.state.epfInfo.TotalBalance.error}
              labelFontSize={textboxLabelFontSize}
              fontSize={textboxFontSize}
              textColor={textboxTextColor}
              baseColor={textboxBaseColor}
              onChangeText={totbalance => {
                epfInfo.TotalBalance.value = totbalance;
                this.setState({ epfInfo });
              }}
              onBlur={() => {
                const totbalance = epfInfo.TotalBalance.value.replace(/ $/g, '');
                epfInfo.TotalBalance.value = totbalance;
                this.setState({ epfInfo });
                this.validateData(4, this.state.epfInfo)
              }}
            />

          </View>
          <View style={styles.firstRowCol2}>
            <TextField
              labelTextStyle={{ fontFamily: OpenSan, fontSize: 12 }}
              maxLength={20}
              prefix='₹ '
              tintColor={textboxBaseColor}
              value={this.state.epfInfo.LastContributedAmount.value}
              label={this.label.lastcontributedamount.labelText}
              error={this.state.epfInfo.LastContributedAmount.error}
              labelFontSize={textboxLabelFontSize}
              fontSize={textboxFontSize}
              textColor={textboxTextColor}
              baseColor={textboxBaseColor}
              onChangeText={lastcontriamount => {
                epfInfo.LastContributedAmount.value = lastcontriamount;
                this.setState({ epfInfo });
              }}
              onBlur={() => {
                const lastcontriamount = epfInfo.LastContributedAmount.value.replace(/ $/g, '');
                epfInfo.LastContributedAmount.value = lastcontriamount;
                this.setState({ epfInfo });
                this.validateData(5, this.state.epfInfo)
              }}
            />
          </View>
        </View>
      </CardView>


    );
  }
  render() {
    const { epfInfo } = this.state
    return (
      <View style={styles.blockContainer}>

        <View style={styles.usermsg}>
          {this.state.chatmsg ? <Text style={styles.usermsgStyle}>I want to add an EPF</Text> : null}
        </View>
        <CardView cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}
          style={{
            margin: 5,
            paddingRight: 5
          }}>
          {this.state.chatmsg ? <Text style={styles.systemMsg}>Okay, A few more details and you'll be done.</Text> : null}
        </CardView>
        <View style={styles.epfHeaderDetails}>
          {this.state.chatmsg ? this.showEPFDetails() : null}
        </View>

        <View style={styles.chatRowStyle}>
          <TextInput
            style={styles.textInputstyle}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder='Type here...'
            underlineColorAndroid="transparent"
          />{this.state.text ? <TouchableOpacity onPress={() => this.requestChat()} ><Image source={require('../Images/arrow.png')} style={styles.ImageStyle} /></TouchableOpacity> : <Image source={require('../Images/mic.png')} style={styles.ImageStyle} />}

        </View>
      </View>
    );
  }
}

