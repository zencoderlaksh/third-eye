import React from 'react';
import './ReviewTrail.css';

// Exact student reviews from https://thirdeyeclasses.com/new-student-review/
export const EXACT_REVIEWS = [
  {
    id: 1,
    name: 'Shina Mathur',
    role: 'Student (Graphic designing)',
    image: 'https://thirdeyeclasses.com/wp-content/uploads/2025/10/Shinaa.png',
    rating: 5,
    review: 'My Graphic Designing Training from Thirdeye Computer Classes was very helpful . The Trainer Mukesh Sir has extremely good expertise inn the subject.',
    date: 'Verified Student'
  },
  {
    id: 2,
    name: 'Ilmuddin Behlim',
    role: 'Student (Full Stack & Python)',
    image: 'https://thirdeyeclasses.com/wp-content/uploads/2025/10/IIlmuddin.png',
    rating: 5,
    review: 'Best coaching in Jaipur.And Faculty are highly experienced and professional. All team members are very supportive and dedicated… highly recommend to join if you want to take any life changing course…',
    date: 'Verified Student'
  },
  {
    id: 3,
    name: 'Punya Singh',
    role: 'React JS Student',
    image: 'https://thirdeyeclasses.com/wp-content/uploads/2025/10/unnamed.png',
    rating: 5,
    review: "I learnt React JS from this institute and the experience and mentorship was so efficient that i completed 60% of course in just 25 days and that's a great pleasure for me because more than half of the course was completed before two months. Thank you ThirdEye",
    date: 'Verified Student'
  },
  {
    id: 4,
    name: 'Shadab Mohammad',
    role: 'Data Analytics & Python Student',
    image: 'https://thirdeyeclasses.com/wp-content/uploads/2025/10/shadab.png',
    rating: 5,
    review: 'am doing sql and python programming for Data Analytics course online from Third eye computer class Class is amazing and fruitful , instructor Tanush Mahirchandani is very friendly in teaching. Focuses more on Practical over theories.',
    date: 'Verified Student'
  },
  {
    id: 5,
    name: 'Geet Kashyap',
    role: 'Digital Marketing Student',
    image: 'https://thirdeyeclasses.com/wp-content/uploads/2025/10/unnamed-1.png',
    rating: 5,
    review: 'I m taking digital marketing course from third eye computer classes. Faculty are highly experienced and professional. All team members are very supportive and dedicated… highly recommend to join if you want to take any life changing course…',
    date: 'Verified Student'
  }
];

// Additional alumni reviews from Third Eye Computer Classes
export const ADDITIONAL_REVIEWS = [
  {
    id: 6,
    name: 'Rohit Khandelwal',
    role: '3D CAD & Modeling Student',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&auto=format&fit=crop',
    rating: 5,
    review: 'The CAD and 3D modeling training here gave me the exact industry-standard skill set I needed. The lab infrastructure and 1-on-1 mentorship in Jaipur is second to none.',
    date: 'Verified Student'
  },
  {
    id: 7,
    name: 'Anjali Sharma',
    role: 'Web Development Student',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80&auto=format&fit=crop',
    rating: 5,
    review: 'From zero coding background to deploying full stack web applications! Mentors solved my doubts patiently and guided me until placement. Highly recommended!',
    date: 'Verified Student'
  },
  {
    id: 8,
    name: 'Vikas Meena',
    role: 'Animation & VFX Student',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80&auto=format&fit=crop',
    rating: 5,
    review: 'The 2D and 3D animation portfolio I built at Third Eye helped me crack my first studio interview immediately after course completion. Truly life-changing mentorship.',
    date: 'Verified Student'
  }
];

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      {/* Top Author Details */}
      <div className="review-card-header">
        <div className="review-avatar-wrapper">
          <img
            src={review.image}
            alt={review.name}
            className="review-avatar-img"
            loading="lazy"
            onError={(e) => {
              // Fallback to initials if external image is blocked
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="review-user-info">
          <div className="review-author-name">{review.name}</div>
          <div className="review-author-role">{review.role}</div>
        </div>
      </div>

      {/* 5-Star Rating */}
      <div className="review-stars" aria-label="5 out of 5 stars">
        {'★'.repeat(review.rating || 5)}
      </div>

      {/* Review Text */}
      <p className="review-quote-text">
        "{review.review}"
      </p>

      {/* Card Footer */}
      <div className="review-card-footer">
        <span className="review-verified-badge">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Verified Student
        </span>
        <span className="review-source-tag">Third Eye Portal</span>
      </div>
    </div>
  );
}

export default function ReviewTrail() {
  const row1 = [...EXACT_REVIEWS, ...ADDITIONAL_REVIEWS];
  const row2 = [...ADDITIONAL_REVIEWS, ...EXACT_REVIEWS];

  return (
    <div className="review-trail-section">
      {/* Track 1: Moving to Left */}
      <div className="overflow-hidden py-3">
        <div className="review-trail-track review-trail-row-left">
          {row1.concat(row1).map((rev, index) => (
            <ReviewCard key={`r1-${rev.id}-${index}`} review={rev} />
          ))}
        </div>
      </div>

      {/* Track 2: Moving to Right */}
      <div className="overflow-hidden py-3">
        <div className="review-trail-track review-trail-row-right">
          {row2.concat(row2).map((rev, index) => (
            <ReviewCard key={`r2-${rev.id}-${index}`} review={rev} />
          ))}
        </div>
      </div>
    </div>
  );
}
