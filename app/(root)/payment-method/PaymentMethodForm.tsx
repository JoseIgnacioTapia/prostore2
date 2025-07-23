'use client';
import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { paymentMethodSchema } from '@/lib/validators';
import CheckoutSteps from '@/components/shared/CheckoutSteps';
import { zodResolver } from '@hookform/resolvers/zod';

function PaymentMethodForm({
  preferredPaymentMethod,
}: {
  preferredPaymentMethod: string | null;
}) {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof paymentMethodSchema>>({
    resolver: zodResolver(paymentMethodSchema),
    defaultValues: {
      type: preferredPaymentMethod || 'credit_card',
    },
  });

  const [isPending, startTransition] = useTransition();

  return (
    <>
      <CheckoutSteps current={2} />
    </>
  );
}

export default PaymentMethodForm;
