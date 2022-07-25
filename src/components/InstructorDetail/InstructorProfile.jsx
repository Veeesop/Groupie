import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function InstructorProfile() {
  return (
    <>
      <div className="profileHeader">
        <div className="pic">
          <Avatar
            // sx={{ width: 100, height: 100 }}
            alt="Profile Photo"
          />
        </div>
        <div className="containerProfile">
          <div> Edan </div>
          <div> He/Him </div>
          <div>
            <InstagramIcon color="primary" />
            <FacebookIcon color="primary" />
            <TwitterIcon color="primary" />
          </div>
          <div className="chip"> Ace Certification </div>
        </div>
      </div>
    </>
  );
}
export default InstructorProfile;
