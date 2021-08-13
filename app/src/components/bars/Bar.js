import React,{Fragment,useState} from 'react'
import './Bar.css';

const Bar=({index,length,color})=>{
    const [len,setLen]=useState(length)

    const colors=[['rgba(61,90,241,0.5)','rgba(61,90,241,0.2)'],['rgba(255,48,79,1)','rgba(255,90,241,0.5)'],['rgba(131,232,90,1)','rgba(131,232,241,0.2)']]

    const barStyle={
        height:length
    }
    
    const inputStyle = {
		position: 'relative',
		top: Math.floor(length / 2) - 12,
		width: length,
		left: -Math.floor(length / 2) + 13,
		border: 'none',
		background: 'none',
	};

    const bottom_front = {
		transform: `translateY(${200 - length}px) rotateX(-90deg)`,
		backgroundColor: `${colors[color][0]}`,
		boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
		trasistion: '0.3s',
	};

    const right_left = {
		height: `${length}px`,
		transform: `translateY(${200 - length}px)`,
		backgroundColor: `${colors[color][0]}`,
		boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
		trasistion: '0.3s',
	};

    const handleChange = (e) => {
		let val = e.target.value;
		if (val === '') {
			setLen(0);
			
		} else {
			val = parseInt(val,10);
			if (val > 200) {
				setLen(200);
				
			} else {
				setLen(val);
				
			}
		}
	};
    return (
        <Fragment>
            <div className="bar" style={barStyle}>
                <div className="side top"></div>
                <div className="side bottom" style={bottom_front}></div>
                <div className="side right">
                    <div className="color-bar right-color-bar" style={right_left}></div>
                </div>
                <div className="side left" style={right_left}>
                <div className="color-bar left-color-bar" style={right_left}></div>
                </div>
                <div className="side front" style={bottom_front}>((
                <input type="number" length={length} style={inputStyle} value={len} onChange={handleChange} />
                </div>
                
            </div>
        </Fragment>
    )
}


export default Bar