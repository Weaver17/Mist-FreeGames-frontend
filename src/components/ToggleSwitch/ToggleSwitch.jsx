import "./ToggleSwitch.css";

const ToggleSwitch = ({ toggleFavoritesAndSaved, isFavoritesChecked }) => {
  return (
    <div className="toggle-switch">
      <label htmlFor="temp-switch-checkbox" className="toggle-switch__label">
        <input
          className="toggle-switch_checkbox"
          type="checkbox"
          id="toggle-switch-checkbox"
          name="toggle-switch-checkbox"
          value="favorites"
          onClick={toggleFavoritesAndSaved}
        />
        <span
          className={
            isFavoritesChecked
              ? "toggle-switch__slider toggle-switch__favorites"
              : "toggle-switch__slider toggle-switch__saved"
          }
        ></span>
        <p
          className={`toggle-switch__favorites ${
            isFavoritesChecked && "toggle-switch__active"
          }`}
        >
          Favorites
        </p>
        <p
          className={`toggle-switch__saved ${
            !isFavoritesChecked && "toggle-switch__active"
          }`}
        >
          Saved Games
        </p>
      </label>
    </div>
  );
};

export default ToggleSwitch;
