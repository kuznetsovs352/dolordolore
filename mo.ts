class Subscription {
  // Optional premium flag
  premium?: boolean;

  constructor(premium?: boolean) {
    this.premium = premium;
  }

  // Method to check if the subscription is premium
  isPremium(): boolean {
    return this.premium === true;
  }
}

// Usage
const userSubscription = new Subscription(true);
console.log(`Is the user's subscription premium? ${userSubscription.isPremium()}`);
