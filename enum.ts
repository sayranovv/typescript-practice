enum Membership {
    Simple,
    Standard,
    Premium,
}

const membership = Membership.Standard
const membershipReverse = Membership[2]

console.log(membership) // 1
console.log(membershipReverse) // Premium

enum SocialMedia {
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM',
    TWITTER = 'TWITTER',
}

const social = SocialMedia.FACEBOOK
console.log(social) // FACEBOOK
