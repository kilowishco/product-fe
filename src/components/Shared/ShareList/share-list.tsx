import { FC, useState } from 'react';
import { ListProps } from '../../../types';
import BareButton from '../Button/BareButton';
import SecondaryButton from '../Button/SecondaryButton';
import { ShareListContainer, CopyLinkContainer, SocialShareContainer } from './share-list.styled';

type ShareListProps = {
  list: ListProps;
};

const ShareList: FC<ShareListProps> = ({ list }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = list.link;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const CopyLink = () => {
    return (
      <>
        <h4>Copy sharable link here.</h4>
        <CopyLinkContainer>
          <input
            aria-label="Wishlist external link"
            value={list.link}
            type="text"
            placeholder="Enter email address"
            readOnly
          />
          <SecondaryButton
            size="sm"
            text={`${copied ? 'Link Copied!!' : 'Copy Link'}`}
            onClick={!copied && copyLink}
          />
        </CopyLinkContainer>
      </>
    );
  };

  const SocialShare = () => {
    return (
      <>
        <SocialShareContainer>
          <h4>In a hurry? Quickly share on social media.</h4>
          <ul>
            <li>
              <BareButton
                text={
                  <a
                    href={`http://www.facebook.com/sharer.php?u=${list.link}`}
                    rel="noopener noreferrer">
                    <span className="sr-only">Share on Facebook</span>
                    <svg
                      aria-hidden
                      width="10"
                      height="20"
                      viewBox="0 0 10 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.175 3.32083H10.0008V0.140833C9.68583 0.0975 8.6025 0 7.34083 0C4.70833 0 2.905 1.65583 2.905 4.69917V7.5H0V11.055H2.905V20H6.46667V11.0558H9.25417L9.69667 7.50083H6.46583V5.05167C6.46667 4.02417 6.74333 3.32083 8.175 3.32083Z"
                        fill="#7575FE"
                      />
                    </svg>
                  </a>
                }
              />
            </li>
            <li>
              <BareButton
                text={
                  <a
                    href={`https://twitter.com/intent/tweet?text=${list.title}%20-&url=${list.link}&via=kilowish`}
                    rel="noopener noreferrer">
                    <span className="sr-only">Share on Twitter</span>
                    <svg
                      aria-hidden
                      width="26"
                      height="20"
                      viewBox="0 0 26 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M25.2834 2.36769C24.368 2.76923 23.3926 3.03538 22.3757 3.16462C23.4218 2.54 24.2203 1.55846 24.5957 0.375385C23.6203 0.956923 22.5434 1.36769 21.3957 1.59692C20.4695 0.610769 19.1495 0 17.7095 0C14.9157 0 12.6664 2.26769 12.6664 5.04769C12.6664 5.44769 12.7003 5.83231 12.7834 6.19846C8.58797 5.99385 4.87566 3.98308 2.38181 0.92C1.94643 1.67538 1.69105 2.54 1.69105 3.47077C1.69105 5.21846 2.59105 6.76769 3.93258 7.66462C3.12181 7.64923 2.32643 7.41385 1.65258 7.04308C1.65258 7.05846 1.65258 7.07846 1.65258 7.09846C1.65258 9.55077 3.40182 11.5877 5.69566 12.0569C5.28489 12.1692 4.8372 12.2231 4.37258 12.2231C4.04951 12.2231 3.72335 12.2046 3.4172 12.1369C4.07105 14.1354 5.92643 15.6046 8.13258 15.6523C6.41566 16.9954 4.23566 17.8046 1.87566 17.8046C1.46181 17.8046 1.06489 17.7862 0.667969 17.7354C2.90335 19.1769 5.55258 20 8.40951 20C17.6957 20 22.7726 12.3077 22.7726 5.64C22.7726 5.41692 22.7649 5.20154 22.7541 4.98769C23.7557 4.27692 24.5972 3.38923 25.2834 2.36769Z"
                        fill="#7575FE"
                      />
                    </svg>
                  </a>
                }
              />
            </li>
            <li>
              <BareButton
                text={
                  <a
                    href={`https://api.whatsapp.com/send?text=Hello, checkout out my wishlist at ${list.link}`}
                    rel="noopener noreferrer">
                    <span className="sr-only">Share on Whatsapp</span>
                    <svg
                      aria-hidden
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.5046 4.62488C16.5046 -0.000152887 10.3796 -1.37516 5.62952 1.49986C1.00449 4.37488 -0.495526 10.6249 2.5045 15.25L2.7545 15.625L1.75449 19.375L5.50452 18.375L5.87952 18.625C7.50454 19.5 9.25455 20 11.0046 20C12.8796 20 14.7546 19.5 16.3796 18.5C21.0046 15.5 22.3796 9.37492 19.5046 4.62488ZM16.8796 14.25C16.3796 15 15.7546 15.5 14.8796 15.625C14.3796 15.625 13.7546 15.875 11.2546 14.875C9.12955 13.875 7.37953 12.2499 6.12952 10.3749C5.37952 9.49992 5.00452 8.37491 4.87952 7.2499C4.87952 6.2499 5.25452 5.37489 5.87952 4.74988C6.12953 4.49988 6.37953 4.37488 6.62953 4.37488H7.25453C7.50454 4.37488 7.75454 4.37488 7.87954 4.87488C8.12954 5.49989 8.75454 6.9999 8.75454 7.1249C8.87955 7.2499 8.87955 7.49991 8.75454 7.62491C8.87955 7.87491 8.75455 8.12491 8.62954 8.24991C8.50454 8.37491 8.37954 8.62491 8.25454 8.74991C8.00454 8.87492 7.87954 9.12492 8.00454 9.37492C8.50454 10.1249 9.12955 10.8749 9.75455 11.4999C10.5046 12.1249 11.2546 12.6249 12.1296 12.9999C12.3796 13.1249 12.6296 13.1249 12.7546 12.8749C12.8796 12.6249 13.5046 11.9999 13.7546 11.7499C14.0046 11.4999 14.1296 11.4999 14.3796 11.6249L16.3796 12.6249C16.6296 12.7499 16.8796 12.8749 17.0046 12.9999C17.1296 13.3749 17.1296 13.875 16.8796 14.25Z"
                        fill="#7575FE"
                      />
                    </svg>
                  </a>
                }
              />
            </li>
            <li>
              <BareButton
                text={
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${list.link}&title=${list.title}`}
                    rel="noopener noreferrer">
                    <span className="sr-only">Share on LinkedIn</span>
                    <svg
                      aria-hidden
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.59113 0C2.43585 0 0.671875 1.76393 0.671875 3.91925V16.0814C0.671875 18.2367 2.43581 20 4.59113 20H16.7533C18.9086 20 20.6719 18.2367 20.6719 16.0814V3.91925C20.6719 1.76397 18.9086 0 16.7533 0H4.59113ZM5.57688 3.3004C6.61029 3.3004 7.24683 3.97882 7.26648 4.87059C7.26648 5.74267 6.61025 6.44015 5.55689 6.44015H5.5375C4.52376 6.44015 3.86853 5.74271 3.86853 4.87059C3.86853 3.97884 4.54359 3.3004 5.57686 3.3004H5.57688ZM14.4824 7.46842C16.4698 7.46842 17.9597 8.76743 17.9597 11.5589V16.7702H14.9393V11.9083C14.9393 10.6866 14.5022 9.85307 13.4091 9.85307C12.5747 9.85307 12.0773 10.4149 11.8589 10.9576C11.7791 11.1518 11.7595 11.4229 11.7595 11.6946V16.7702H8.73916C8.73916 16.7702 8.7788 8.53433 8.73916 7.68156H11.7602V8.9686C12.1615 8.34933 12.8795 7.4684 14.4824 7.4684V7.46842ZM4.04669 7.68222H7.06707V16.7702H4.04669V7.68222Z"
                        fill="#7575FE"
                      />
                    </svg>
                  </a>
                }
              />
            </li>
          </ul>
        </SocialShareContainer>
      </>
    );
  };

  return (
    <ShareListContainer className="share-list">
      {CopyLink()}
      {SocialShare()}
    </ShareListContainer>
  );
};

export default ShareList;