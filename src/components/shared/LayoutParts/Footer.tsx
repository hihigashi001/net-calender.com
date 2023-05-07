type FooterProps = {
  onClickHomePage: () => void
}

export const Footer = ({ onClickHomePage }: FooterProps) => {
  return (
    <footer className="flex items-center justify-center bg-gray-700 text-sm text-white py-4 px-8">
      <p className="hover:opacity-50 cursor-pointer" onClick={onClickHomePage}>
        © net-calender.com
      </p>
    </footer>
  )
}
