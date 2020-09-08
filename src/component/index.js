import React, { useState } from 'react'
import logo from '../logo.svg';
import sound_1 from '../images/sound_1.gif';
import sound_2 from '../images/sound_2.gif';
import sound_3 from '../images/sound_3.gif';
import sound_4 from '../images/sound_4.gif';
import sound_5 from '../images/sound_5.gif';
import sound_6 from '../images/sound_6.gif';
import sound_7 from '../images/sound_7.gif';
import sound_8 from '../images/sound_8.gif';
import sound_9 from '../images/sound_9.gif';
import sound_10 from '../images/sound_10.gif';
import sound_11 from '../images/sound_11.gif';
import sound_12 from '../images/sound_12.gif';


import './index.css';
import { Icon } from 'semantic-ui-react';

const participantsList = ['Paul Filmalter', 'Lu Ouyang', 'Tanvi Parikh', 'Harman Ahluwalia', 'Yofetahe Habtu', 'Wendy Wang', 'Qazi Zaahirah', 'Aditya Lakshmi', 'Kaiser Iqbal'];
const activeParticipants = [...participantsList];
const allSoundImages = [sound_1, sound_2, sound_3, sound_4, sound_5, sound_6, sound_7, sound_8, sound_9, sound_10, sound_11, sound_12];

const Presenter = () => {

    const [allParticipant, setAllParticipant] = useState(participantsList);
    const [participants, setParticipants] = useState(activeParticipants);
    const [soundImage, setSoundImage] = useState(sound_1);
    const [soundImages, setSoundImages] = useState(allSoundImages);

    const handleParticipantSelector = (e, index, checkedPart) => {
        e.preventDefault();
        if (participants.some(p => p === checkedPart)) {
            const part = participants.filter(p => p !== checkedPart);
            setParticipants(part);
            document.querySelector("#part_" + index).setAttribute("class", "red close icon");
        } else {
            const part = participants.concat(checkedPart);
            setParticipants(part);
            document.querySelector("#part_" + index).setAttribute("class", "blue check square icon");
        }
    }

    const handleSelection = async () => {
        preSetup();
        const selectedParticipant = participants[Math.floor(Math.random() * participants.length)];
        const soundBgSelectedIndex = Math.floor(Math.random() * soundImages.length);
        const soundBackground = soundImages[soundBgSelectedIndex];
        await sleep(500);
        document.querySelector('#sound').style.display = 'block';
        document.querySelector('#participantName').innerHTML = selectedParticipant;
        const remainingPart = participants.filter(part => part !== selectedParticipant);
        if (selectedParticipant === undefined) {
            document.querySelector('#selectBtn').style.display = 'none';
            document.querySelector('#participantName').innerHTML = '<span style=\'font-size: 16px\'>Now it is time for parking lot. Have a good day!!!</span>';
        }
        setParticipants(remainingPart);
        setSoundImage(soundBackground);
        const remainingSoundImages = soundImages.filter((i, index) => index !== soundBgSelectedIndex);
        setSoundImages(remainingSoundImages);
        postSetup();
    }

    const preSetup = () => {
        document.querySelector('#spinner').style.display = 'block';
        document.querySelector('#sound').style.display = 'none';
        document.querySelector('#selectBtn').disabled = true;
        document.querySelector('#participantName').innerHTML = '';
    }

    const postSetup = () => {
        document.querySelector('#spinner').style.display = 'none';
        document.querySelector('#selectBtn').disabled = false;
        document.querySelector('#selectBtn').style.textAlign = 'center';
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const handleNewParticipant = async (e) => {
        e.preventDefault();
        const newPart = document.querySelector('#newParticipant').value;
        if (newPart.length !== 0 && !participants.some(part => part.toLowerCase() === newPart.toLowerCase())) {
            const updatePart = [...participants, newPart];
            setParticipants(updatePart);
            const updateAllPart = [...allParticipant, newPart];
            setAllParticipant(updateAllPart);
            document.querySelector('#newParticipant').value = '';
        }
    }

    return (
        <div className='selectorBlock'>
            <div className='resultBlock'>
                <div className='result'>
                    <img id='spinner' src={logo} className="App-logo" alt="logo" style={{ display: 'none' }} />
                    <img id='sound' src={soundImage} alt='sound' style={{ display: 'none' }} />
                    <div id='participantName' className='selectedName'>Let's start!</div>
                </div>
            </div>
            <div className='btn'>
                <Icon id='selectBtn' circular color='blue' name='play' onClick={handleSelection} />
            </div>
            <div className='participantList'>
                <div>
                    {participants.map((part, index) => {
                        return (
                            <div key={index} className='participant'> <Icon color='teal' name='user' />{part}</div>
                        );
                    })}
                </div>
                <div className='allParticipantList'>
                    {allParticipant.sort((a, b) => {
                        if (a > b) { return 1 }
                        if (a < b) { return -1 }
                        return 0;
                    }).map((part, index) => {
                        return (
                            <div key={index} className='participant'>
                                <Icon id={'part_' + index} color='blue' name='check square' onClick={(e) => handleParticipantSelector(e, index, part)} /> {part}
                            </div>
                        );
                    })}
                    <div>
                        <input id='newParticipant' type='text' /> <Icon id='selectBtn' color='blue' name='add' onClick={(e) => handleNewParticipant(e)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presenter;