import myImage from '../../myImage.jpg'

function ProfilePhoto() {
    return (
        <div >

            <img src={myImage}  style={{width:"40%", border:"1px solid"}}/>
        </div>
    );
}

export default ProfilePhoto;
