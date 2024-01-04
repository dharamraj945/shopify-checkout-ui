import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  TextField,
  Icon,
  Pressable,
  Tooltip,
} from '@shopify/ui-extensions-react/checkout';


export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <TextField label="Last name"  accessory={

      <Pressable
        overlay={
          <Tooltip>
            In case we need to contact you about
            your order
          </Tooltip>
        }
      >
        <Icon source="questionFill" />
      </Pressable>
    } />

  )
}