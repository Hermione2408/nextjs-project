import styles from "./viewSwitcher.module.css";
import Image from "next/image";
import GridView from '../../assets/img/svg/grid-view.svg';
import GridViewSelected from '../../assets/img/svg/grid-view-selected.svg';

import ListView from '../../assets/img/svg/list-view.svg'
import ListViewSelected from '../../assets/img/svg/list-view-selected.svg'

import BookmarkView from '../../assets/img/svg/bookmark.svg'
import BookmarkViewSelected from '../../assets/img/svg/bookmark-selected.svg'

import TaggedImage from '../../assets/img/svg/tagged.svg'
import TaggedImageSelected from '../../assets/img/svg/tagged-selected.svg'

const ViewSwitcher = ({ switchViewFunction, selectedTab }) => {
    return (
        <div className={styles.container}>
            <div className={styles.icon} onClick={() => switchViewFunction("grid")}>
                {selectedTab == 'grid' ?
                    (<Image src={GridViewSelected} height={24} width={24} alt="Grid view selected" />)
                    : (<Image src={GridView} height={24} width={24} alt="Grid view" />)}

            </div>
            <div className={styles.icon} onClick={() => switchViewFunction("list")}>
                {selectedTab == 'list' ?
                    (<Image src={ListViewSelected} height={24} width={24} alt="List view selected" />) :
                    (<Image src={ListView} height={24} width={24} alt="List view" />)
                }

            </div>

            <div className={styles.icon} onClick={() => switchViewFunction("bookmark")}>
                {selectedTab == 'bookmark' ?
                    (<Image src={BookmarkViewSelected} height={24} width={24} alt="Bookmark view selected" />) :
                    (<Image src={BookmarkView} height={24} width={24} alt="Bookmark view" />)
                }
            </div>

            <div className={styles.icon} onClick={() => switchViewFunction("tagged")}>
                {selectedTab == 'tagged' ?
                    (<Image src={TaggedImageSelected} height={24} width={24} alt="Tagged image view selected" />) :
                    (<Image src={TaggedImage} height={24} width={24} alt="Tagged image view" />)
                }
            </div>


        </div>
    )
}
export default ViewSwitcher
