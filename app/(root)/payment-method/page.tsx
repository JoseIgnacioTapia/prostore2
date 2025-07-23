import { Metadata } from 'next';
import { auth } from '@/auth';
import { getUserById } from '@/lib/actions/user.actions';
import PaymentMethodForm from './PaymentMethodForm';

export const metadata: Metadata = {
  title: 'Select Payment Method',
};

async function PaymentMethodPage() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error('User not found');

  const user = await getUserById(userId);

  return (
    <div>
      <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />
    </div>
  );
}

export default PaymentMethodPage;
