import { AdjustmentIcon, BellIcon, HomeIcon } from "../icons"
import MenuItem from "./MenuItem"


const LateralMenu = () => {
    return (
      <aside>
          <ul>
            <MenuItem url="/" text="start" icon={HomeIcon} />
            <MenuItem url="/adjustment" text="Start" icon={AdjustmentIcon} />
            <MenuItem url="/notifications" text="Notifications" icon={BellIcon} />
          </ul>
      </aside>
    )
  }
  
  export default LateralMenu