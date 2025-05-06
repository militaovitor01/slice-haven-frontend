import React from 'react';
import { Clock, Percent, Truck } from 'lucide-react';
import {
  BannerContainer,
  BannerContent,
  BannerItem,
  BannerItemText,
  BannerItemTitle
} from './PromotionBannerStyles';

export const PromotionBanner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerItem>
          <Truck size={28} />
          <BannerItemText>
            <BannerItemTitle>Fast Delivery</BannerItemTitle>
            <span>30 minutes or free</span>
          </BannerItemText>
        </BannerItem>
        
        <BannerItem>
          <Clock size={28} />
          <BannerItemText>
            <BannerItemTitle>Opening Hours</BannerItemTitle>
            <span>11:00 AM - 11:00 PM</span>
          </BannerItemText>
        </BannerItem>
        
        <BannerItem>
          <Percent size={28} />
          <BannerItemText>
            <BannerItemTitle>Weekly Deals</BannerItemTitle>
            <span>New offers every week</span>
          </BannerItemText>
        </BannerItem>
      </BannerContent>
    </BannerContainer>
  );
};